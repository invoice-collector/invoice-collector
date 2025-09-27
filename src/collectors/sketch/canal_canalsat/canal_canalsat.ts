
import { SketchCollector } from '../../sketchCollector';

export class CanalCanalsatCollector extends SketchCollector {

    static CONFIG = {
        id: "canal_canalsat",
        name: "Canal+ Canalsat",
        description: "i18n.collectors.canal_canalsat.description",
        version: "0",
        website: "https://client.canal.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105789.jpg",
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
        entryUrl: "https://client.canal.fr/",
    }

    constructor() {
        super(CanalCanalsatCollector.CONFIG);
    }
}
