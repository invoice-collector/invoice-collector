
import { SketchCollector } from '../../sketchCollector';

export class ComputerfuturesWorksheetsCollector extends SketchCollector {

    static CONFIG = {
        id: "computerfutures_worksheets",
        name: "ComputerFutures Worksheets",
        description: "i18n.collectors.computerfutures_worksheets.description",
        version: "0",
        website: "https://worksheets.computerfutures.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22757.jpg",
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
        entryUrl: "https://worksheets.computerfutures.com/",
    }

    constructor() {
        super(ComputerfuturesWorksheetsCollector.CONFIG);
    }
}
