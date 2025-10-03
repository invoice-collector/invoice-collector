
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TeachableCollector extends SketchCollector {

    static CONFIG = {
        id: "teachable",
        name: "Teachable",
        description: "i18n.collectors.teachable.description",
        version: "0",
        website: "https://learning.develapp.me/admin/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119891.jpg",
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
        entryUrl: "https://learning.develapp.me/admin/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TeachableCollector.CONFIG);
    }
}
