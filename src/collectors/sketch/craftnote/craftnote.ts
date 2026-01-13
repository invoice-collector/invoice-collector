
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CraftnoteCollector extends SketchCollector {

    static CONFIG = {
        id: "craftnote",
        name: "Craftnote",
        description: "i18n.collectors.craftnote.description",
        version: "0",
        website: "https://58.email.stripe.com/CL0/https:%2F%2Fpay.stripe.com%2Finvoice%2Facct_1D1wBVITF0Uw35TM%2Flive_YWNjdF8xRDF3QlZJVEYwVXczNVRNLF9NTWxYREVDNkxUc0lzbWFqZ2RJRE9LOFNoUVREQmJOLDUyNzc4MTc10200NNpYWnZY%2Fpdf%3Fs=em/1/0100018305119852-0fb9577c-f748-4600-a952-01",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1387427.jpg",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        loginUrl: "https://58.email.stripe.com/CL0/https:%2F%2Fpay.stripe.com%2Finvoice%2Facct_1D1wBVITF0Uw35TM%2Flive_YWNjdF8xRDF3QlZJVEYwVXczNVRNLF9NTWxYREVDNkxUc0lzbWFqZ2RJRE9LOFNoUVREQmJOLDUyNzc4MTc10200NNpYWnZY%2Fpdf%3Fs=em/1/0100018305119852-0fb9577c-f748-4600-a952-01",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CraftnoteCollector.CONFIG);
    }
}
