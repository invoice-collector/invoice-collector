
import { SketchCollector } from '../../sketchCollector';

export class CenterpointEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "centerpoint_energy",
        name: "CenterPoint Energy",
        description: "i18n.collectors.centerpoint_energy.description",
        version: "0",
        website: "http://www.centerpointenergy.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8708.jpg",
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
        entryUrl: "http://www.centerpointenergy.com",
    }

    constructor() {
        super(CenterpointEnergyCollector.CONFIG);
    }
}
