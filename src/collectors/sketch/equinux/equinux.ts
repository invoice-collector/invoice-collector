
import { SketchCollector } from '../../sketchCollector';

export class EquinuxCollector extends SketchCollector {

    static CONFIG = {
        id: "equinux",
        name: "equinux",
        description: "i18n.collectors.equinux.description",
        version: "0",
        website: "https://store.equinux.com/eqnetwork/store/signin.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/58820.jpg",
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
        entryUrl: "https://store.equinux.com/eqnetwork/store/signin.html",
    }

    constructor() {
        super(EquinuxCollector.CONFIG);
    }
}
