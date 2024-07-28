import useTitle from '../customHook/useTitle'

const DtitleB = () => {
  
let [count,changeTitle] = useTitle();

  return (
    <div className='col-md-4 m-auto'>
      <h1>Dtitle B</h1>
      <h3>count :{count}</h3>
      <button className='btn btn-success' onClick={changeTitle}>changeTitle</button>
      </div>
  )
}

export default DtitleB