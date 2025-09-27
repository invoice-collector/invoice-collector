
import { SketchCollector } from '../../sketchCollector';

export class AmbitEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "ambit_energy",
        name: "Ambit Energy",
        description: "i18n.collectors.ambit_energy.description",
        version: "0",
        website: "https://my.ambitenergy.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8911.jpg",
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
        entryUrl: "https://my.ambitenergy.com/login",
    }

    constructor() {
        super(AmbitEnergyCollector.CONFIG);
    }
}
