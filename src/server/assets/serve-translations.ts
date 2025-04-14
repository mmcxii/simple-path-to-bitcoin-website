import express from "express";
import * as path from "path";

export function serveTranslations() {
  return express.static(path.join("assets"), {
    maxAge: 60000,
  });
}
