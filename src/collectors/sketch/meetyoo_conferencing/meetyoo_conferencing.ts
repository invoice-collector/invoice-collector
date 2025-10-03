
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MeetyooConferencingCollector extends SketchCollector {

    static CONFIG = {
        id: "meetyoo_conferencing",
        name: "meetyoo conferencing",
        description: "i18n.collectors.meetyoo_conferencing.description",
        version: "0",
        website: "https://portal.meetyoo.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10776.jpg",
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
        entryUrl: "https://portal.meetyoo.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MeetyooConferencingCollector.CONFIG);
    }
}
