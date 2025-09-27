
import { SketchCollector } from '../../sketchCollector';

export class LinktreeCollector extends SketchCollector {

    static CONFIG = {
        id: "linktree",
        name: "linktree",
        description: "i18n.collectors.linktree.description",
        version: "0",
        website: "https://linktr.ee/admin/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/70046.jpg",
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
        entryUrl: "https://linktr.ee/admin/billing",
    }

    constructor() {
        super(LinktreeCollector.CONFIG);
    }
}
