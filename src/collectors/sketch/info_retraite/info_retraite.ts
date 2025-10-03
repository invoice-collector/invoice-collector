
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InfoRetraiteCollector extends SketchCollector {

    static CONFIG = {
        id: "info_retraite",
        name: "Info Retraite",
        description: "i18n.collectors.info_retraite.description",
        version: "0",
        website: "https://www.info-retraite.fr/portail-services/#/login#header",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778933.jpg",
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
        entryUrl: "https://www.info-retraite.fr/portail-services/#/login#header",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InfoRetraiteCollector.CONFIG);
    }
}
