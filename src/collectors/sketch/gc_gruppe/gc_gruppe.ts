
import { SketchCollector } from '../../sketchCollector';

export class GcGruppeCollector extends SketchCollector {

    static CONFIG = {
        id: "gc_gruppe",
        name: "GC Gruppe",
        description: "i18n.collectors.gc_gruppe.description",
        version: "0",
        website: "https://www.gconlineplus.de/#MainPage",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26347.jpg",
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
        entryUrl: "https://www.gconlineplus.de/#MainPage",
    }

    constructor() {
        super(GcGruppeCollector.CONFIG);
    }
}
