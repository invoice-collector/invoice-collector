
import { SketchCollector } from '../../sketchCollector';

export class SpectrumCustomerCollector extends SketchCollector {

    static CONFIG = {
        id: "spectrum_customer",
        name: "Spectrum Customer",
        description: "i18n.collectors.spectrum_customer.description",
        version: "0",
        website: "https://www.spectrum.net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8604.jpg",
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
        entryUrl: "https://www.spectrum.net/",
    }

    constructor() {
        super(SpectrumCustomerCollector.CONFIG);
    }
}
