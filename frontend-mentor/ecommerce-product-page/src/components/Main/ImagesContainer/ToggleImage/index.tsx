interface IProps {
    step: string
    toggleImage: (step: string) => void
}

export function ToggleImage ({step, toggleImage}: IProps) {
    return(
        <div className="toggle-image" id={`${step}-image`} onClick={() => toggleImage(step)}>
            {
                step === "next" ?
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" fill="none"/></svg>
                :
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" fill="none"/></svg>
            }
        </div>
    )
}