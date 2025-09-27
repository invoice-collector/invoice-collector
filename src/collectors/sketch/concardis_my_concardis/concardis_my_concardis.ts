
import { SketchCollector } from '../../sketchCollector';

export class ConcardisMyConcardisCollector extends SketchCollector {

    static CONFIG = {
        id: "concardis_my_concardis",
        name: "Concardis - my.concardis",
        description: "i18n.collectors.concardis_my_concardis.description",
        version: "0",
        website: "https://login.concardis.com/auth/?contextId=lqy7f6pf7ks548s6gmzzb3wqun",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/63095.jpg",
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
        entryUrl: "https://login.concardis.com/auth/?contextId=lqy7f6pf7ks548s6gmzzb3wqun",
    }

    constructor() {
        super(ConcardisMyConcardisCollector.CONFIG);
    }
}
