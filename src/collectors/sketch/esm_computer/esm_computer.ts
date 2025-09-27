
import { SketchCollector } from '../../sketchCollector';

export class EsmComputerCollector extends SketchCollector {

    static CONFIG = {
        id: "esm_computer",
        name: "ESM-Computer",
        description: "i18n.collectors.esm_computer.description",
        version: "0",
        website: "https://www.esm-computer.de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64460.jpg",
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
        entryUrl: "https://www.esm-computer.de/account",
    }

    constructor() {
        super(EsmComputerCollector.CONFIG);
    }
}
