const {Controller} = require('./controller');

const convertor = new Controller();


test('convert 23 to words', async () => {
    const number = '23'
    const expectedResult = "ad,ae,af,bd,be,bf,cd,ce,cf"

    const words = await convertor.convertNumber(number);

    expect(words.join(',')).toBe(expectedResult);
});

test('convert 777 to words', async () => {
    const number = '777'
    const expectedResult = "ppp,ppq,ppr,pps,pqp,pqq,pqr,pqs,prp,prq,prr,prs,psp,psq,psr,pss,qpp,qpq,qpr,qps,qqp,qqq,qqr,qqs,qrp,qrq,qrr,qrs,qsp,qsq,qsr,qss,rpp,rpq,rpr,rps,rqp,rqq,rqr,rqs,rrp,rrq,rrr,rrs,rsp,rsq,rsr,rss,spp,spq,spr,sps,sqp,sqq,sqr,sqs,srp,srq,srr,srs,ssp,ssq,ssr,sss"

    const words = await convertor.convertNumber(number);

    expect(words.join(',')).toBe(expectedResult);
});

test('convert 0232 to words', async () => {
    const number = '0232'
    const expectedResult = "0ada,0adb,0adc,0aea,0aeb,0aec,0afa,0afb,0afc,0bda,0bdb,0bdc,0bea,0beb,0bec,0bfa,0bfb,0bfc,0cda,0cdb,0cdc,0cea,0ceb,0cec,0cfa,0cfb,0cfc"

    const words = await convertor.convertNumber(number);

    expect(words.join(',')).toBe(expectedResult);
});
