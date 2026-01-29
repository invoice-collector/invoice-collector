
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AvroEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "avro_energy",
        name: "Avro Energy",
        description: "i18n.collectors.avro_energy.description",
        version: "0",
        website: "https://www.avroenergy.co.uk/Account/Login2",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8784.jpg",
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
        loginUrl: "https://www.avroenergy.co.uk/Account/Login2",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AvroEnergyCollector.CONFIG);
    }
}
