import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from 'material-ui/Layout'
import Me from '../me/me';

// eslint-disable-next-line
import mainStyle from './main.css'

const Main = (props, context) => (
    <div className="main-page">
        <MuiThemeProvider>
            <Layout container gutter={ 24 }>
                <Layout item xs={ 12 } className="main-items">
                    <h1>Hi, I'm Fabian</h1>
                </Layout>
                <Layout item xs={ 12 }  className="main-items">
                    <Me  justify="center"/>
                </Layout>
                <Layout  item xs={ 12 } className="main-items">
                    <h2>Customers</h2>
                </Layout>
                <Layout container>
                    <Layout item xs={ 12 } sm={ 3 }>
                        <div>BMW</div>
                    </Layout>
                    <Layout item xs={ 12 } sm={ 3 }>
                        <div>Allianz</div>
                    </Layout>
                    <Layout item xs={ 12 } sm={ 3 }>
                        <div>DPD</div>
                    </Layout>
                    <Layout item xs={ 12 } sm={ 3 }>
                        <div>IDS Logistik</div>
                    </Layout>
                </Layout>
                <Layout item xs={ 12 }  className="main-items">
                    <Me  justify="center"/>
                </Layout>
            </Layout>
        </MuiThemeProvider>
    </div>
);

export default Main;
