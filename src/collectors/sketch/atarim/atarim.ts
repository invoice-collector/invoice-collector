
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AtarimCollector extends SketchCollector {

    static CONFIG = {
        id: "atarim",
        name: "Atarim",
        description: "i18n.collectors.atarim.description",
        version: "0",
        website: "https://atarim.io/account/?parameter_1=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRmZDA3YWJkOGE3MjFiNTcyNTU0ZWEyYjJlNjVmNjI4NDJjNTdkNzVlOTBjOGFhYjhiMmQ5OTdkNmViNWE2YzAyZTNiOTA5ODQ1YjVjZDU0In0.eyJhdWQiOiIxIiwianRpIjoiZGZkMDdhYmQ4YTcyMWI1NzI1NTRlYTJiMmU2",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1880079.jpg",
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
        loginUrl: "https://atarim.io/account/?parameter_1=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRmZDA3YWJkOGE3MjFiNTcyNTU0ZWEyYjJlNjVmNjI4NDJjNTdkNzVlOTBjOGFhYjhiMmQ5OTdkNmViNWE2YzAyZTNiOTA5ODQ1YjVjZDU0In0.eyJhdWQiOiIxIiwianRpIjoiZGZkMDdhYmQ4YTcyMWI1NzI1NTRlYTJiMmU2",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AtarimCollector.CONFIG);
    }
}
