
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KoelscheBlisterCollector extends SketchCollector {

    static CONFIG = {
        id: "koelsche_blister",
        name: "Koelsche Blister",
        description: "i18n.collectors.koelsche_blister.description",
        version: "0",
        website: "https://kundenportal.koelsche-blister.de/browse//Rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4210099.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://kundenportal.koelsche-blister.de/browse//Rechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KoelscheBlisterCollector.CONFIG);
    }
}
