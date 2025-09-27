
import { SketchCollector } from '../../sketchCollector';

export class KfwKreditanstaltFurWiederaufbauCollector extends SketchCollector {

    static CONFIG = {
        id: "kfw_kreditanstalt_fur_wiederaufbau",
        name: "KfW Kreditanstalt fur Wiederaufbau",
        description: "i18n.collectors.kfw_kreditanstalt_fur_wiederaufbau.description",
        version: "0",
        website: "https://onlinekreditportal.kfw.de/BK_KNPlattform/KfwFormularServer",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/77394.jpg",
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
        entryUrl: "https://onlinekreditportal.kfw.de/BK_KNPlattform/KfwFormularServer",
    }

    constructor() {
        super(KfwKreditanstaltFurWiederaufbauCollector.CONFIG);
    }
}
