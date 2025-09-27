
import { SketchCollector } from '../../sketchCollector';

export class NrcHandelsbladCollector extends SketchCollector {

    static CONFIG = {
        id: "nrc_handelsblad",
        name: "NRC Handelsblad",
        description: "i18n.collectors.nrc_handelsblad.description",
        version: "0",
        website: "https://login.nrc.nl/login?service=https%3A%2F%2Fservice.nrc.nl%2Finloggen%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3137488.jpg",
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
        entryUrl: "https://login.nrc.nl/login?service=https%3A%2F%2Fservice.nrc.nl%2Finloggen%2F",
    }

    constructor() {
        super(NrcHandelsbladCollector.CONFIG);
    }
}
