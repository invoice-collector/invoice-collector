
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TimetacCollector extends SketchCollector {

    static CONFIG = {
        id: "timetac",
        name: "TimeTac",
        description: "i18n.collectors.timetac.description",
        version: "0",
        website: "https://go.timetac.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22092.jpg",
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
        entryUrl: "https://go.timetac.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TimetacCollector.CONFIG);
    }
}
