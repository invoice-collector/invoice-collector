
import { SketchCollector } from '../../sketchCollector';

export class BfsFinanceScotCollector extends SketchCollector {

    static CONFIG = {
        id: "bfs_finance_scot",
        name: "bfs finance - SCOT",
        description: "i18n.collectors.bfs_finance_scot.description",
        version: "0",
        website: "https://scot.online/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/65817.jpg",
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
        entryUrl: "https://scot.online/login",
    }

    constructor() {
        super(BfsFinanceScotCollector.CONFIG);
    }
}
