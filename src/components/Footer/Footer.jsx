
export const Footer = ({porcentaje}) => {
  return (
    <>
        <div className="container mb-4 fixed-bottom">
            <div className="row">
                <div className="col">
                  <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: `${porcentaje}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{Math.floor(porcentaje)}%</div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}
