
import { SketchCollector } from '../../sketchCollector';

export class IonosEsCollector extends SketchCollector {

    static CONFIG = {
        id: "ionos_es",
        name: "Ionos (.es)",
        description: "i18n.collectors.ionos_es.description",
        version: "0",
        website: "https://login.ionos.es/?__lf=Static",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8746.jpg",
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
        entryUrl: "https://login.ionos.es/?__lf=Static",
    }

    constructor() {
        super(IonosEsCollector.CONFIG);
    }
}
