import applyNow from 'src/modal/lib/hooks/applyNow';

import { useXProps } from 'src/modal/lib/hooks/helpers';

global.open = jest.fn();

const defaultXProps = {
    refId: '1',
    env: 'local',
    onClick: jest.fn()
};

jest.mock('src/utils/sdk');
jest.mock('src/modal/lib/hooks/helpers');

jest.mock('preact/hooks', () => ({
    useContext: () => ({
        payerId: '1'
    })
}));

describe('Apply Now URL hook', () => {
    afterEach(() => {
        useXProps.mockClear();
        global.open.mockClear();
    });

    useXProps.mockReturnValue(defaultXProps);

    it('Should return the staging URL', () => {
        applyNow()();

        expect(global.open).toBeCalledWith(
            'https://www.msmaster.qa.paypal.com/ppcreditapply/da/us?cats_id=DA_AD_UPSTREAM&actor=merchant&mktgrefid=1&payer_id=1'
        );

        useXProps.mockReturnValue({ ...defaultXProps, env: undefined });
        applyNow()();

        expect(global.open).toBeCalledWith(
            'https://www.msmaster.qa.paypal.com/ppcreditapply/da/us?cats_id=DA_AD_UPSTREAM&actor=merchant&mktgrefid=1&payer_id=1'
        );

        useXProps.mockReturnValue({ ...defaultXProps, env: 'staging' });
        applyNow()();

        expect(global.open).toBeCalledWith(
            'https://www.msmaster.qa.paypal.com/ppcreditapply/da/us?cats_id=DA_AD_UPSTREAM&actor=merchant&mktgrefid=1&payer_id=1'
        );
    });

    it('Should return the sandbox URL', () => {
        useXProps.mockReturnValue({ ...defaultXProps, env: 'sandbox' });
        applyNow()();

        expect(global.open).toBeCalledWith(
            'https://www.sandbox.paypal.com/ppcreditapply/da/us?cats_id=DA_AD_UPSTREAM&actor=merchant&mktgrefid=1&payer_id=1'
        );
    });

    it('Should return production URL', () => {
        useXProps.mockReturnValue({ ...defaultXProps, env: 'production' });
        applyNow()();

        // Production URL
        expect(global.open).toBeCalledWith(
            'https://www.paypal.com/ppcreditapply/da/us?cats_id=DA_AD_UPSTREAM&actor=merchant&mktgrefid=1&payer_id=1'
        );
    });
});