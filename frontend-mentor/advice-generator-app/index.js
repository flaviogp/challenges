
const slipAdvice = document.querySelector('.slip-advice');
const slipId = document.querySelector('.slip-id');
const toggleButton = document.querySelector('.toggle-advice');
const loading = document.querySelector('.spinner');
const content = document.querySelector('.content');

const link = 'https://api.adviceslip.com/advice'
   
async function getValueApi(link) {
    const response = await fetch(link).then(res => res.json())
    .catch(e => alert(e))

    return response
}

function setLoading(value){
    if(value){
        content.style.display = 'none'
        loading.style.display = 'block'
    }else{
        loading.style.display = 'none'
        content.style.display = 'block'
    }
}


const getSlipKeys = async () => {
    setLoading(true)
    const getvalue = await getValueApi(link);
    setLoading(false)
    const advice = `"${getvalue.slip.advice}"`;
    const id = getvalue.slip.id;
    slipAdvice.innerHTML = advice
    slipId.innerHTML = id
}

getSlipKeys()

toggleButton.addEventListener('click', async () => {
    await getSlipKeys();
})