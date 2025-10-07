
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NeostradaCollector extends SketchCollector {

    static CONFIG = {
        id: "neostrada",
        name: "neostrada",
        description: "i18n.collectors.neostrada.description",
        version: "0",
        website: "https://www.neostrada.nl/inloggen.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32379.jpg",
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
        entryUrl: "https://www.neostrada.nl/inloggen.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NeostradaCollector.CONFIG);
    }
}
