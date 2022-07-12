import {SnowflakeClient} from "./snowflake-client";

jest.setTimeout(10000000);

type TestType = {
    MYVALUE: string
}

function getClient(): SnowflakeClient {
    const account = '<ACCOUNT>';
    const name = '<NAME>';
    const password = '<PASSWORD>';
    return new SnowflakeClient(account, name, password);
}

describe('SnowflakeClient', () => {
    it ('doRequest', async () => {
        let results =  await getClient().doRequest("SELECT 123 AS MYVALUE",[]);

        expect(results.length).toBe(1);
        let result1: TestType = <TestType> results[0];
        expect(result1.MYVALUE).toBe(123);
    });

    it ('can use bindings', async () => {
        let results =  await getClient().doRequest("SELECT ? AS MYVALUE",[1235]);

        expect(results.length).toBe(1);
        let result1: TestType = <TestType> results[0];
        expect(result1.MYVALUE).toBe(1235);
    });

    it ('can bind strings', async () => {
        let results =  await getClient().doRequest("SELECT ? AS MYVALUE",['Some Text']);

        expect(results.length).toBe(1);
        let result1: TestType = <TestType> results[0];
        expect(result1.MYVALUE).toBe('Some Text');
    });

    it ('can bind db strings', async () => {
        let results =  await getClient().doRequest("CREATE DATABASE ?",['MyNewDb']);

        expect(results.length).toBe(1);
        let result1: TestType = <TestType> results[0];
        expect(result1.MYVALUE).toBe('Some Text');
    });

    it ('disallows multiple statements', async () => {
        const t = async () => {
            await getClient().doRequest("SELECT 'Hello'; SELECT 'World'",['MyNewDb']);
        }
        expect(t)
            .toThrow(/Multiple SQL statements/);
    });

});