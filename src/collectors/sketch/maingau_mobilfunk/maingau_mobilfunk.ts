
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MaingauMobilfunkCollector extends SketchCollector {

    static CONFIG = {
        id: "maingau_mobilfunk",
        name: "Maingau Mobilfunk",
        description: "i18n.collectors.maingau_mobilfunk.description",
        version: "0",
        website: "https://kundenportal.maingau-mobilfunk.de/path/app/?rq_AppGuid=F9753FD1A6F904836F333F4C6DF400CB080DF333&rq_TargetPageGuid=9502AC996FF7B23F75F8E049247F3CABDB0CC290&qs_link=F284684140CBDE6BC8BC8D6B10114427A1263E7B&qs_mode=new&qs_page=9502AC996FF7B23F75F8E04",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2192165.jpg",
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
        entryUrl: "https://kundenportal.maingau-mobilfunk.de/path/app/?rq_AppGuid=F9753FD1A6F904836F333F4C6DF400CB080DF333&rq_TargetPageGuid=9502AC996FF7B23F75F8E049247F3CABDB0CC290&qs_link=F284684140CBDE6BC8BC8D6B10114427A1263E7B&qs_mode=new&qs_page=9502AC996FF7B23F75F8E04",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MaingauMobilfunkCollector.CONFIG);
    }
}
