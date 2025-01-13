export function TwoPanel({LeftPanel, RightPanel}) {
    return (
        <div className="flex h-100">
            <div className="w-2/3 h-100">
               {LeftPanel}
            </div>
            <div className="w-1/3">
                {RightPanel}
            </div>
        </div>
    )
}