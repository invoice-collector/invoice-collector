
import { SketchCollector } from '../../sketchCollector';

export class DogadoOnehomeCollector extends SketchCollector {

    static CONFIG = {
        id: "dogado_onehome",
        name: "Dogado OneHome",
        description: "i18n.collectors.dogado_onehome.description",
        version: "0",
        website: "https://onehome.dogado.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2728471.jpg",
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
        entryUrl: "https://onehome.dogado.de",
    }

    constructor() {
        super(DogadoOnehomeCollector.CONFIG);
    }
}
