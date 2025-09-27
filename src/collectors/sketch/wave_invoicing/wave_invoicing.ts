
import { SketchCollector } from '../../sketchCollector';

export class WaveInvoicingCollector extends SketchCollector {

    static CONFIG = {
        id: "wave_invoicing",
        name: "Wave Invoicing",
        description: "i18n.collectors.wave_invoicing.description",
        version: "0",
        website: "https://my.waveapps.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/740313.jpg",
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
        entryUrl: "https://my.waveapps.com/login/",
    }

    constructor() {
        super(WaveInvoicingCollector.CONFIG);
    }
}
