
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlsaceFibreCollector extends SketchCollector {

    static CONFIG = {
        id: "alsace_fibre",
        name: "Alsace Fibre",
        description: "i18n.collectors.alsace_fibre.description",
        version: "0",
        website: "https://extranet.alsacefibre.fr/facture",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4418459.jpg",
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
        entryUrl: "https://extranet.alsacefibre.fr/facture",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlsaceFibreCollector.CONFIG);
    }
}
