import React, { use } from 'react'
import { useNavigate } from 'react-router-dom' 
import './TableauFrais.css'
export default function TableauFrais({listeFrais}) {  
const naviger = useNavigate();
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Driots_en</th>
                    <th>Consevation</th>
                    <th>Date</th> 
                    <th>total</th>
                    <th>Verification</th>
                </tr>
            </thead> 
            <tbody> 
                {
                    listeFrais.map((frais , index) => (
                        <tr key={index} >
                            <td>{frais.id}</td>
                            <td>{frais.Driots_en}</td>
                            <td>{frais.Consevation}</td>
                            <td>{frais.Date}</td>
                            <td>{frais.total}</td> 
                            <td> <button onClick={() => naviger(`/${frais.id}`)}>Veifier</button></td>
                        </tr>
                    ))
                }
             
            </tbody>
        </table>
    </div>
  )
}
