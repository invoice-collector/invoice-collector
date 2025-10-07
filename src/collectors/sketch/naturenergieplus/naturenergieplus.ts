
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NaturenergieplusCollector extends SketchCollector {

    static CONFIG = {
        id: "naturenergieplus",
        name: "NaturEnergiePlus",
        description: "i18n.collectors.naturenergieplus.description",
        version: "0",
        website: "https://mein.naturenergieplus.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/48864.jpg",
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
        entryUrl: "https://mein.naturenergieplus.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NaturenergieplusCollector.CONFIG);
    }
}
