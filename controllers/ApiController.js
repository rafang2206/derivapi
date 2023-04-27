
let api = require('../utils/utils').api;
let agregarCuentaMetaApi = require('../utils/utils').agregarCuentaMetaApi;

const crearCuentaDemoMt5 = async(req, res) => {

    const { email, name, phone } = req.body;

    try {

        const demoAccount = await api.metatraderAccountGeneratorApi.createMT5DemoAccount({
            accountType: 'type',
            balance: 10000,
            email: email,
            leverage: 100,
            serverName: 'Deriv-Demo',
            name: name,
            phone: phone
            });
        
        const { login, password } = demoAccount._data;

        //procedemos a insertar la cuenta en la base de datos

        await agregarCuentaMetaApi(demoAccount._data, name);

        res.json({"login": login, "password": password, "message": "Cuenta creada correctamente"});

    } catch (error) {
        console.log(error);
    }
}

const obtenerInformacionCuenta = async() => {
    try {
        let accounts = await api.metatraderAccountApi.getAccounts();
    
        let account = await api.metatraderAccountApi.getAccount(accounts[0].id);
    
        await account.deploy();
    
        console.log('Waiting for API server to connect to broker (may take couple of minutes)');
    
        await account.waitConnected();
    
        let connection = account.getRPCConnection();
    
        await connection.connect();
    
        await connection.waitSynchronized();
    
        // access local copy of terminal state
        console.log('Testing terminal state access');
        console.log(account._metaApiWebsocketClient)
        // acceso con rpc
    
        // objeto connection
        //console.log('account information:', await connection.getAccountInformation());
    } catch (error) {
        console.log(error);
    }
}

const obtenerOrdenesAbiertas = async() => {
    try {
        let accounts = await api.metatraderAccountApi.getAccounts();
    
        let account = await api.metatraderAccountApi.getAccount(accounts[0].id);
    
        await account.deploy();
    
        console.log('Waiting for API server to connect to broker (may take couple of minutes)');
    
        await account.waitConnected();
    
        let connection = account.getRPCConnection();
    
        await connection.connect();
    
        await connection.waitSynchronized();
    
        console.log('open orders:', await connection.getOrders());
    } catch (error) {
        console.log(error);
    }
}


const obtenerPosicionesAbiertas = async() => {
    try {
        let accounts = await api.metatraderAccountApi.getAccounts();
    
        let account = await api.metatraderAccountApi.getAccount(accounts[0].id);
    
        await account.deploy();
    
        console.log('Waiting for API server to connect to broker (may take couple of minutes)');
    
        await account.waitConnected();
    
        let connection = account.getRPCConnection();
    
        await connection.connect();
    
        await connection.waitSynchronized();
    
        console.log('positions:', await connection.getPositions());
    } catch (error) {
        console.log(error);
    }
}


const obtenerHistorialOrdenes = async() => {
    try {
        let accounts = await api.metatraderAccountApi.getAccounts();
    
        let account = await api.metatraderAccountApi.getAccount(accounts[0].id);
    
        await account.deploy();
    
        console.log('Waiting for API server to connect to broker (may take couple of minutes)');
    
        await account.waitConnected();
    
        let connection = account.getRPCConnection();
    
        await connection.connect();
    
        await connection.waitSynchronized();
    
        console.log('history orders by ticket:', await connection.getHistoryOrdersByTicket('3251060788'));
        console.log('history orders by position:', await connection.getHistoryOrdersByPosition('1234567'));
        console.log('history orders (~last 3 months):', await connection.getHistoryOrdersByTimeRange(new Date(Date.now() - 90 * 24 * 60 * 60 * 1000), new Date()));
    } catch (error) {
        console.log(error);
    }

}

const obtenerHistorialDeals = async() => {
    try {
        let accounts = await api.metatraderAccountApi.getAccounts();
    
        let account = await api.metatraderAccountApi.getAccount(accounts[0].id);
    
        await account.deploy();
    
        console.log('Waiting for API server to connect to broker (may take couple of minutes)');
    
        await account.waitConnected();
    
        let connection = account.getRPCConnection();
    
        await connection.connect();
    
        await connection.waitSynchronized();
    
        console.log('history deals by ticket:', await connection.getDealsByTicket('3251060788'));
        console.log('history deals (~last 3 months):', await connection.getDealsByTimeRange(new Date(Date.now() - 90 * 24 * 60 * 60 * 1000), new Date()));
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    crearCuentaDemoMt5,
    obtenerInformacionCuenta,
    obtenerOrdenesAbiertas,
    obtenerPosicionesAbiertas,
    obtenerHistorialOrdenes,
    obtenerHistorialDeals
}

