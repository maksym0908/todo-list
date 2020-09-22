import React from 'react';
import classes from './App.module.css';
import ListContainer from './containers/ListContainer'
import HeaderContainer from './containers/HeaderContainer'
import FooterContainer from './containers/FooterContainer'
import ModalContainer from './containers/ModalContainer';
import { Spinner } from './assets/Loader/Loader';


export const App = (props) => {

 if (!props.fetching) {
         return (
            <div className={classes.wrapper}>
            <ModalContainer />
            <HeaderContainer />
            <ListContainer />
           { props.todos.length ?  <FooterContainer /> :
             <p style={{display: 'flex', justifyContent: 'center'}}>На сегодня дел нет, пока что...</p>}
            </div>
         )   
   } else {
      return <div><Spinner /></div>
   }

   

}



