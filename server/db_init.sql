-- BP 游戏数据库初始化脚本
-- 执行：mysql -u root -p bp_game < db_init.sql

CREATE DATABASE IF NOT EXISTS bp_game DEFAULT CHARACTER SET utf8mb4;
USE bp_game;

-- 用户表（存钻石余额）
CREATE TABLE IF NOT EXISTS users (
  customer_id   VARCHAR(64)  NOT NULL PRIMARY KEY COMMENT 'BP 用户ID',
  diamond       INT UNSIGNED NOT NULL DEFAULT 0    COMMENT '钻石数量',
  created_at    DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 订单表
CREATE TABLE IF NOT EXISTS orders (
  order_id      VARCHAR(128) NOT NULL PRIMARY KEY  COMMENT 'BP 订单号（payCallback 里的 orderId）',
  game_order_id VARCHAR(128) NOT NULL              COMMENT '游戏方订单号（客户端生成）',
  customer_id   VARCHAR(64)  NOT NULL              COMMENT '用户ID',
  goods_id      INT          NOT NULL              COMMENT '商品编号',
  diamonds      INT UNSIGNED NOT NULL DEFAULT 0    COMMENT '本单发放钻石数',
  status        TINYINT      NOT NULL DEFAULT 1    COMMENT '1=已发货',
  paid_at       DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_game_order (game_order_id),
  INDEX idx_customer   (customer_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
