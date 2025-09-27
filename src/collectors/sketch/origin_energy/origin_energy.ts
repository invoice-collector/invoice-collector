
import { SketchCollector } from '../../sketchCollector';

export class OriginEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "origin_energy",
        name: "Origin Energy",
        description: "i18n.collectors.origin_energy.description",
        version: "0",
        website: "https://www.originenergy.com.au/#login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9024.jpg",
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
        entryUrl: "https://www.originenergy.com.au/#login",
    }

    constructor() {
        super(OriginEnergyCollector.CONFIG);
    }
}
