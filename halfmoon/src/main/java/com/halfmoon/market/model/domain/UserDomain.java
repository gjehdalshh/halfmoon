package com.halfmoon.market.model.domain;

import com.halfmoon.market.model.UserEntity;

public class UserDomain extends UserEntity{
    private int p_total;

    public int getP_total() {
        return p_total;
    }
    public void setP_total(int p_total) {
        this.p_total = p_total;
    }
}
