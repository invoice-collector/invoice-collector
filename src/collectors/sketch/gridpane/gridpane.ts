
import { SketchCollector } from '../../sketchCollector';

export class GridpaneCollector extends SketchCollector {

    static CONFIG = {
        id: "gridpane",
        name: "Gridpane",
        description: "i18n.collectors.gridpane.description",
        version: "0",
        website: "https://my.gridpane.com/settings#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/404221.jpg",
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
        entryUrl: "https://my.gridpane.com/settings#/invoices",
    }

    constructor() {
        super(GridpaneCollector.CONFIG);
    }
}
