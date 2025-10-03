
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DeVolkskrantCollector extends SketchCollector {

    static CONFIG = {
        id: "de_volkskrant",
        name: "De Volkskrant",
        description: "i18n.collectors.de_volkskrant.description",
        version: "0",
        website: "https://mijnomgeving.volkskrant.nl/facturen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4375106.jpg",
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
        entryUrl: "https://mijnomgeving.volkskrant.nl/facturen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DeVolkskrantCollector.CONFIG);
    }
}
