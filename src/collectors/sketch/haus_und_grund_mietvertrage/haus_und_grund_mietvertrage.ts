
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HausUndGrundMietvertrageCollector extends SketchCollector {

    static CONFIG = {
        id: "haus_und_grund_mietvertrage",
        name: "Haus und Grund Mietvertrage",
        description: "i18n.collectors.haus_und_grund_mietvertrage.description",
        version: "0",
        website: "https://www.xn--hausundgrundmietvertrge-g8b.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/789402.jpg",
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
        entryUrl: "https://www.xn--hausundgrundmietvertrge-g8b.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HausUndGrundMietvertrageCollector.CONFIG);
    }
}
