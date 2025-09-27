
import { SketchCollector } from '../../sketchCollector';

export class WgvVersicherungenCollector extends SketchCollector {

    static CONFIG = {
        id: "wgv_versicherungen",
        name: "WGV Versicherungen",
        description: "i18n.collectors.wgv_versicherungen.description",
        version: "0",
        website: "https://www.wgv.de/app/pks2020/postfach",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/404196.jpg",
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
        entryUrl: "https://www.wgv.de/app/pks2020/postfach",
    }

    constructor() {
        super(WgvVersicherungenCollector.CONFIG);
    }
}
