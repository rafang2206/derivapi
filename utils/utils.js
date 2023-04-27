
let MetaApi = require('metaapi.cloud-sdk').default;

let token = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJkYTBjZDlhOTAxZjRjOWRhOTZlZjBiNDkxNjVlYjM2MyIsInBlcm1pc3Npb25zIjpbXSwiYWNjZXNzUnVsZXMiOlt7Im1ldGhvZHMiOlsidHJhZGluZy1hY2NvdW50LW1hbmFnZW1lbnQtYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbIio6JFVTRVJfSUQkOioiXX0seyJtZXRob2RzIjpbIm1ldGFhcGktYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbIio6JFVTRVJfSUQkOioiXX0seyJtZXRob2RzIjpbIm1ldGFhcGktYXBpOndzOnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyIqOiRVU0VSX0lEJDoqIl19LHsibWV0aG9kcyI6WyJtZXRhYXBpLWFwaTp3czpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiKjokVVNFUl9JRCQ6KiJdfSx7Im1ldGhvZHMiOlsibWV0YXN0YXRzLWFwaTpyZXN0OnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIl0sInJlc291cmNlcyI6WyIqOiRVU0VSX0lEJDoqIl19LHsibWV0aG9kcyI6WyJyaXNrLW1hbmFnZW1lbnQtYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbIio6JFVTRVJfSUQkOioiXX0seyJtZXRob2RzIjpbImNvcHlmYWN0b3J5LWFwaTpyZXN0OnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyIqOiRVU0VSX0lEJDoqIl19LHsibWV0aG9kcyI6WyJtdC1tYW5hZ2VyLWFwaTpyZXN0OmRlYWxlcjoqOioiLCJtdC1tYW5hZ2VyLWFwaTpyZXN0OnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyIqOiRVU0VSX0lEJDoqIl19XSwidG9rZW5JZCI6IjIwMjEwMjEzIiwiaW1wZXJzb25hdGVkIjpmYWxzZSwicmVhbFVzZXJJZCI6ImRhMGNkOWE5MDFmNGM5ZGE5NmVmMGI0OTE2NWViMzYzIiwiaWF0IjoxNjgxNTY3NTQwfQ.BmbIx2fpBy6UlRBzhsUXpMsKUqCavJHMtA12mQzC_eT5quRdFSaX9C8WMAlfiSnAsvHkDviMbCvzIK_XsU8R0OUQOPFyfD88U2ckiABASK_5x2OQFF1IGqp_g9QI-kdyx6SdzBK6Tz2RKlTmO3ehjeYxQ-pwOE43WjnHu_mz5S1_0PAJ8uilQOp9w5DBRRP8aPgKYMSTHLpN8nKM7wOBn42JYhaT6goxxTO3-V0DrvEkuUP5NodDRU2VafNGIm9_9FiPCF_UK9XVzu5YUuuZ1vyI8LknvqsJWJPPrqbutXl_hJasK1C2_BmsVQ13hKO7fn6Fhb6gNdLUZ48iCX_zRTlpbPodLLTeWBb2LmV1s3tNXC03DmygP76NGsF6GFb7jg6O0rPZ5tuG0dBdREn5ADkBAhpy2iy7RBc0BJ2o7kxNDRM8HnjocxED5Hn2GhG5Hg0Jorfo--goqadVD6fp6T-0PU_RMny4h5Cxo9rGufMLlufH4K23c_z7AbXKXSXxvGYxXZkPpEWm_kggokYUW--z6kvmL2Q_Io52hVaPz2KclE3k_RVcHN1FF7rfhRcO-VZNO91OTkddklb-ui-FYbVFcttaN6I5JTQbCTpxx1O3oEJ8fLL5SOeSz6kBgLePw6AYEnYxuIvUAwHecjfikEvdqo82yl_vZBJ7VwnUsxA'; 
//30727800
let api = new MetaApi(token);

const agregarCuentaMetaApi = async(cuenta, name) => {

    const { login, password, serverName } = cuenta;

    let accounts = await api.metatraderAccountApi.getAccounts();

    let account = accounts.find(a => a.login === login);

    if(account == undefined) {
        try {
            let createAccount = await api.metatraderAccountApi.createAccount({
                name: name,
                type: 'cloud',
                login: login,
                password: password,
                server: serverName,
                platform: 'mt5',
                magic: 1000
            });
    
            console.log('created account', createAccount);
        } catch (error) {
           console.log(error);
        }
    } else {
        console.log('account already exists');
    }
}

module.exports = {
    api,
    agregarCuentaMetaApi
} 