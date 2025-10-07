
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TraminoFelderCollector extends SketchCollector {

    static CONFIG = {
        id: "tramino_felder",
        name: "Tramino - Felder",
        description: "i18n.collectors.tramino_felder.description",
        version: "0",
        website: "https://marc-felder.tramino.de/tramino/meldewesen/rechnung/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4693205.jpg",
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
        entryUrl: "https://marc-felder.tramino.de/tramino/meldewesen/rechnung/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TraminoFelderCollector.CONFIG);
    }
}
