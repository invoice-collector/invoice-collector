
import { SketchCollector } from '../../sketchCollector';

export class CanalDeIsabelIiCollector extends SketchCollector {

    static CONFIG = {
        id: "canal_de_isabel_ii",
        name: "Canal de Isabel II",
        description: "i18n.collectors.canal_de_isabel_ii.description",
        version: "0",
        website: "https://oficinavirtual.canaldeisabelsegunda.es/recytal/public/inicio.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1035291.jpg",
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
        entryUrl: "https://oficinavirtual.canaldeisabelsegunda.es/recytal/public/inicio.htm",
    }

    constructor() {
        super(CanalDeIsabelIiCollector.CONFIG);
    }
}
