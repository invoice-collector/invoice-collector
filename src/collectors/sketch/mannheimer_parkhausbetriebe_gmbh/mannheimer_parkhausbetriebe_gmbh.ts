
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MannheimerParkhausbetriebeGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "mannheimer_parkhausbetriebe_gmbh",
        name: "Mannheimer Parkhausbetriebe GmbH",
        description: "i18n.collectors.mannheimer_parkhausbetriebe_gmbh.description",
        version: "0",
        website: "https://kundenportal.parken-mannheim.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2694503.jpg",
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
        entryUrl: "https://kundenportal.parken-mannheim.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MannheimerParkhausbetriebeGmbhCollector.CONFIG);
    }
}
