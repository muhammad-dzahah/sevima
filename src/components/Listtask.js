import React from 'react'

function ListTask() {
  return (
    <div>
        <table class="table table-bordered text-center table-success col-lg-12">
            <thead className="table-active">
                <tr>
                    <th scope="col col-lg-2">No</th>
                    <th scope="col">Pelajaran</th>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Tenggat</th>
                    <th scope="col">Jumlah</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>Fisika</td>
                    <td>25juni</td>
                    <td>1juli</td>
                    <td>3</td>
                    <td>belum selesai</td>
                </tr>
                <tr>
                    <td scope="row">2</td>
                    <td>Kimia</td>
                    <td>25juni</td>
                    <td>1juli</td>
                    <td>3</td>
                    <td>belum selesai</td>
                </tr><tr>
                    <td scope="row">3</td>
                    <td>English</td>
                    <td>25juni</td>
                    <td>1juli</td>
                    <td>3</td>
                    <td>belum selesai</td>
                </tr><tr>
                    <td scope="row">4</td>
                    <td>Matematika</td>
                    <td>25juni</td>
                    <td>1juli</td>
                    <td>3</td>
                    <td>belum selesai</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ListTask