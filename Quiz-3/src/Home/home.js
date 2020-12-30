import React, { Component, useEffect, useState} from 'react';
import './styleIndex.css';
import axios from "axios"
import {DaftarBukuContext} from './homeContext'


export default class Home extends React.Component{

    state = {
        title: [],
        description: []
    }

    componentDidMount() {
        axios.get(`http://backendexample.sanbercloud.com/api/books`)
        .then(res => {
            const title = res.data;
            this.setState({ title });
        })
    }
    
    
    // const [DaftarBuku, setDaftarBuku] = useContext(DaftarBukuContext)

    // useEffect( () => {
    //     if (DaftarBuku.lists === null){
    //       axios.get(`http://backendexample.sanbercloud.com/api/books`)
    //       .then(res => {
    //         setDaftarBuku({
    //           ...DaftarBuku, 
    //           lists: res.data.map(el=>{ 
    //             return {id: el.id,
    //               title: el.title, 
    //               description: el.description, 
    //               review: el.review,
    //               release_year: el.release_year,
    //             }
    //           })
    //         })
    //       })
    //     }
    //   }, [setDaftarBuku, DaftarBuku])

    render(){
        return(<>
                <h1>Daftar Buku-Buku Pilihan</h1>
                <div>
                    { this.state.title.map (title => <h1>{title.title}</h1>)}
                </div>
            </>
        );
    }
}